import { FormContainer, MinutesAmountInput, TaskInput } from "./style";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../Contexts/CyclesContext";

export function NewCycleForm() {

  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        id="task"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions" >
        <option value="projeto1" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        placeholder="00"
        type="number"
        id="minutesAmount"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
} 