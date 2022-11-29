import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import { Context } from "../Context";

export default function ManageEntities() {
	const { items , setItems} = useContext(Context);
	const navigate = useNavigate();

	function GoBack() {
		navigate(-1);
	}

	function GoToEditEntity (index : number) {
		navigate(`EditEntity/${index}`);
	}

	function classNames(...classes: any) {
		return classes.filter(Boolean).join(' ')
	}

	function deletePerson(e:  React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) {
		e.stopPropagation();
		const tempArr = items.filter((item, i) => i!==index);
		setItems(tempArr);
	}

	function emptyEditEntity() {
		navigate(`EditEntity/${items.length}`);
	}

	return (
					<div className="px-4 sm:px-6 lg:px-8">
						<div className="sm:flex sm:items-center">
							<div className="sm:flex-auto">
								<h1 className="text-xl font-semibold text-gray-900">Entities</h1>
								<p className="mt-2 text-sm text-gray-700">
									A list of all Entities
								</p>
							</div>
							<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
								<button
									type="button" onClick={() => emptyEditEntity()}
									className=" mr-7 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
								>
									New Entity
								</button>
								<button
									type="button" onClick={GoBack}
									className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
								>
									Back
								</button>
							</div>
						</div>
						<div className="mt-8 flex flex-col">
							<div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 align-middle">
									<div className="shadow-sm ring-1 ring-black ring-opacity-5">
										<table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
											<thead className="bg-gray-50">
											<tr>
												<th
													scope="col"
													className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left
													text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell pl-5"
												>
													Picture
												</th>
												<th
													scope="col"
													className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left
													text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
												>
													Name
												</th>
												<th
													scope="col"
													className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left
													text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
												>
													Age
												</th>
												<th
													scope="col"
													className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left
													text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
												>

												</th>
											</tr>
											</thead>
											<tbody className="bg-white">
											{items.map((person, personIdx) => (
												<tr key={person.entityName} onClick={() => GoToEditEntity(personIdx)}>
													<td
														className={classNames(
															personIdx !== items.length - 1 ? 'border-b border-gray-200 pl-5' : '',
															'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
														)}
													>
														<img className=" h-20 w-20 rounded-full" src={person.picUrl} alt="" />
													</td>

													<td
														className={classNames(
															personIdx !== items.length - 1 ? 'border-b border-gray-200' : '',
															'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
														)}
													>
														{person.entityName}
													</td>

													<td
														className={classNames(
															personIdx !== items.length - 1 ? 'border-b border-gray-200' : '',
															'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
														)}
													>
														{person.age}
													</td>


													<td
														className={classNames(
															personIdx !== items.length - 1 ? 'border-b border-gray-200' : '',
															'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
														)}
													>
														<button onClick={(e) => {deletePerson(e, personIdx)}}
															type="button"
															className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
														>
															Delete
														</button>
													</td>
												</tr>
											))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

	);
}


