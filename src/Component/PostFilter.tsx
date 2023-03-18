import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter} : any) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={(e: any) => setFilter({...filter, query: e.target.value})}
				placeholder="поиск..."
			/>
			<MySelect
			value={filter.sort}
			onChange={(selectedSort: any) => setFilter({...filter, sort: selectedSort})}
			defaultValue="Сортировка"
			options={[
				{value: 'title', name: 'По названию'},
				{value: 'body', name: 'По описанию'}
			]}
			/>
		</div>
	);
};

export default PostFilter;