// import "./../admin-global.css";
import Select from 'react-select'


export default function SelectCategories({categories, setCategory, initialCategory}) {
    let options = []
    // const [nowCategory, setNowCategory] = useState(initialCategory)

    const onChange = (value) => {
        // setNowCategory(value)
        setCategory(value)
        // console.log(nowCategory)
    }

    categories.map(category => options.push({value: category.slug, label: category.title}))

        return (
            <Select onChange={value => onChange(value)}
                    placeholder='Выберите категорию'
                    defaultValue={initialCategory}
                    classNamePrefix="category-select"
                    options={options}/>
        );

}
