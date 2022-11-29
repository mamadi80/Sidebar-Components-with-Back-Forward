import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../Context";
import FileUploader from "./FileUploader";
// import {Widget} from "@uploadcare/react-widget";
// import {FilePicker} from "@apideck/file-picker";
// import '@apideck/file-picker/dist/styles.css';

// const MyComponent = () => {
// 	const handleSelect = (file: any) => {
// 		console.log(file)
// 	}
//
// 	return (
// 		<FilePicker
// 			onSelect={handleSelect}
// 			trigger={<button>Pick a file</button>}
// 			jwt="token-123"
// 			appId="your-app-id"
// 			consumerId="your-consumer-id"
// 		/>
// 	)
// }

export default function EditEntity() {
	const { items, setItems } = useContext(Context);
	const { id } = useParams<string>();
	const intId = Number(id);
	const navigate = useNavigate();
	let [checkNew, setCheckNew] = useState(intId > items.length - 1);

	const [Entity, setEntity] = useState({ age: 0, picUrl: "", entityName: "" });
	if (
		!checkNew &&
		Entity.age === 0 &&
		Entity.picUrl === "" &&
		Entity.entityName === ""
	) {
		setEntity(items[intId]);
	}

	function GoBack() {
		navigate(-1);
	}

	function GoHome() {
		navigate(-2);
	}

	// const setName = (e: ChangeEvent<HTMLInputElement>) => {
	// 	let newItems : Person[] = [];
	// 	if (!checkNew) {
	// 		  newItems = items.map((item, i) => {
	// 			if (i === intId)
	// 				item.entityName = e.target.value;
	//
	// 			return item;
	// 		});
	// 	}
	// 	else {
	// 		newItems = [...items, {entityName : e.target.value ,picUrl:'',age:0}]
	// 	}
	// 	setCheckNew(false);
	// 	setItems(newItems);
	// }
	//
	// const setAge = (e: ChangeEvent<HTMLInputElement>) => {
	// 	let newItems : Person[];
	// 	if (!checkNew) {
	// 		newItems = items.map((item, i) => {
	// 			if (i === intId)
	// 				item.age = Number(e.target.value);
	//
	// 			return item;
	// 		});
	// 	}
	// 	else {
	// 		newItems = [...items, {age : Number(e.target.value) ,picUrl:'',entityName:''}]
	// 	}
	//
	// 	setCheckNew(false);
	// 	setItems(newItems);
	// }

	const SaveChanges = () => {
		if (checkNew) {
			setItems([...items, Entity]);
			setCheckNew(!checkNew);
		} else {
			const newItems = items.map((item, i) => {
				if (i === intId) {
					item.entityName = Entity.entityName;
					item.age = Entity.age;
				}

				return item;
			});
			setItems(newItems);
		}
		navigate(-1);
	};

	return (
		<div>
			<button
				type="button"
				onClick={GoBack}
				className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300
							font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 col-span-1 col-start-3 row-start-7"
			>
				Back
			</button>
			<button
				type="button"
				onClick={GoHome}
				className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300
							font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 col-span-1 col-start-4 row-start-7"
			>
				Home
			</button>

			<div className="grid gap-6 mb-6 grid-cols-6 justify-center place-items-center">
				{/*<h2 className="mt-2 text-xl font-bold leading-7 sm:text-3xl sm:truncate">Edit Entity {intId}</h2>*/}
				<img
					src={Entity.picUrl}
					className="col-span-2 col-start-3 row-start-1 mx-h-24"
					alt={Entity.entityName}
				/>
				<label
					htmlFor="first_name"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-2 col-start-3 row-start-2"
				></label>
				<input
					type="text"
					value={Entity.entityName}
					onChange={(e) => setEntity({ ...Entity, entityName: e.target.value })}
					id="first_name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
			block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-2 col-start-3 row-start-3"
				/>
				<input
					type="text"
					value={Entity.age}
					onChange={(e) =>
						setEntity({ ...Entity, age: Number(e.target.value) })
					}
					id="first_name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
			block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-2 col-start-3 row-start-4"
				/>
				<button
					type="button"
					onClick={GoBack}
					className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300
							font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 col-span-1 col-start-3 row-start-6"
				>
					Discard
				</button>
				<button
					type="button"
					onClick={SaveChanges}
					className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300
							font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 col-span-1 col-start-4 row-start-6"
				>
					Save
				</button>
				{/*<FileUploader/>*/}
				{/*<p>*/}
				{/*	<label >*/}
				{/*		file:*/}
				{/*		<Widget publicKey='AIzaSyB7uLTXwOB_FjNbWNXa7N-9Uoy7yCXps0w'/>*/}
				{/*	</label>*/}
				{/*</p>*/}
				{/*<MyComponent/>*/}
			</div>
		</div>
	);
}
