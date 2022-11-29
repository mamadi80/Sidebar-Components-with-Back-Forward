import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChangeLanguage() {
	const navigate = useNavigate();

	function GoBack() {
		navigate(-1);
	}

	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-xl font-semibold text-gray-900">
						Language Changed
					</h1>
				</div>
				<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
					<button
						type="button"
						onClick={GoBack}
						className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
}
