import { useField } from 'formik'
import { IMaskInput } from 'react-imask'

type MaskedInputProps = {
  name: string
  mask?: string
  placeholder?: string
  className?: string
  showError?: boolean
}

//exemplo de uso
//<MaskedInput name="cep" mask="00000-000" placeholder="Digite seu CEP"/>

export const MaskedInput = ({
  name,
  mask,
  placeholder,
  className,
  showError = false,
}: MaskedInputProps) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <IMaskInput
        {...field}
        mask={mask}
        value={field.value || ''}
        onAccept={(value: string) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={placeholder}
        className={className}
      />
      {showError && meta.touched && meta.error ? (
        <div style={{ color: 'red' }}>{meta.error}</div>
      ) : null}
    </>
  )
}
