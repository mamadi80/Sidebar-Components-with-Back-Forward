import { useNavigate } from "react-router-dom";
import React from "react";

export default function Home() {
	const navigate = useNavigate();

	function GoToChangeLanguage() {
		navigate('ChangeLanguage');
	}

	function GoToManageEntities() {
		navigate('ManageEntities');
	}

	return (
		<div className="grid grid-cols-12" >
				<div className="px-4 sm:px-6 lg:px-8 sm:flex sm:items-center sm:flex-auto col-span-2 border-b-2 border-indigo-200 pb-4 pt-4" onClick={GoToChangeLanguage} >Change Language</div>
				<div className="px-4 sm:px-6 lg:px-8 sm:flex sm:items-center sm:flex-auto row-start-2 col-span-2 pt-4" onClick={GoToManageEntities} >Manage Entities</div>
		</div>
	);
}
