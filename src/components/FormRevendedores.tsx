import { InputField } from "@faststore/ui"
import '@faststore/ui/src/components/molecules/InputField/styles.scss';
import '@faststore/ui/src/components/atoms/Input/styles.scss';
import { Button } from '@faststore/ui';
import '@faststore/ui/src/components/atoms/Button/styles.scss';



const FormRevendedores = (props: any) => {
    return <div id="formRevendedores">
        <p>{props.textDescription}</p>
        <InputField label="Nome" id="inputfield-default"/>
        <InputField label="Email" id="inputfield-default"/>
        <InputField label="Telefone" id="inputfield-default"/>
        <Button variant="primary">Sign the deal</Button>
        </div>
        
}

export default FormRevendedores