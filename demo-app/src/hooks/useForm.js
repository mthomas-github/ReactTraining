export const useForm = (initialState) => {
    const [form, setForm ] = useState(initialState);

    const change = (e) => {
        setForm({
            ...form,
            [ e.target.name ]: e.target.type === 'number'
            ? Number(e.target.value)
            : e.target.value
        });
    };
}