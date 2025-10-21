import { Controller, useForm } from "react-hook-form";
import { CalendarButton } from "../../ui/CalendarButton";

export const AddOrEditTaskForm = ( { onSubmit, formType, submitMessage, task } ) => {

    const { register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        defaultValues: formType === "edit" ? {
            title: task?.title || "",
            description: task?.description || "",
            dueTo: new Date(task?.dueTo).toISOString().split("T")[0] || ""
        } : {
            title: "",
            description: "",
            dueTo: ""
        }
    });

    const DateValidation = (value) => {
        const today = new Date();
        const selected = new Date(value);
        selected.setHours(0, 0, 0, 0);
        today.setHours(0, 0 ,0, 0);
        return selected >= today || "Date cannot be in the past!";
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-[300px] lg:w-full flex m-2 flex-col gap-4 ">
            {errors.title && (<p className="text-xs text-error">{ errors.title.message }</p>)}
            <label className="floating-label">
                <span>Task title</span>
                <input type="text" placeholder="Create header in..." className="input input-md text-neutral-500 focus:text-base-content" {...register("title", {
                    required:"Title required!",
                    minLength:{value:8, message:"Title too short!"},
                })}/>
            </label>
            {errors.description && (<p className="text-xs text-error">{ errors.description.message }</p>)}
            <label className="floating-label">
                <span>Task description</span>
                <textarea className="textarea h-24 resize-none text-neutral-500 focus:text-base-content" placeholder="Task details..." {...register("description",{
                    required:"Description required!",
                    minLength:{value:8, message:"Description too short!"}
                })}></textarea>
            </label>
            { errors.dueTo && (<p className="text-xs text-error">{ errors.dueTo.message }</p>) }
            <Controller 
            control={control}
            name="dueTo"
            rules={{required: "Date is required!", validate:(value)=> DateValidation(value)}}
            render={({ field }) => ( <CalendarButton date={ field.value } setDate={field.onChange} /> )}
            >
                
            </Controller>
            {submitMessage && <p className="text-xs text-warning text-center">{ submitMessage }</p>}
            <button type="submit" className="btn btn-primary">{formType === "add" ? "Add" : "Edit"}</button>
        </form>
    )
}