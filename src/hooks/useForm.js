import { useState } from "react";

function useForm(getModelObject) {

    const [values, setValues] = useState(getModelObject());
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetFormControls = () => {
        setValues(getModelObject());
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
    }
}

export default useForm;