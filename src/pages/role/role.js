import React from 'react';
import {Link} from "react-router-dom";

function Role() {
    return (
        <>
            <section className="col-12 p-1 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between  rounded shadow-sm">
                <section className="col-12  d-flex justify-content-between align-items-center border-bottom rounded  ">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h6 className="col-12 bg-default border-bottom rounded p-3 text-white">نقش ها  </h6>
                        <Link to="/role-create" className="col-5 col-xl-1 mb-1 btn btn-info d-flex align-items-center justify-content-center font-16-rem text-white">
                            <i className="icon icon-Add1 center "></i>
                            جدید
                        </Link>
                    </div>
                </section>
                <section className="col-12 d-flex  flex-wrap p-2 py-2">
                    <div className="col-12 d-flex justify-content-between align-items-center p-2 flex-wrap">
                        <span className="d-flex col-12 col-md-3 ">   تعداد  گروه کالاها :  (505)  </span>
                        <form className="col-12 col-md-3 rounded p-1 d-flex ">
                            <label htmlFor="search"
                                   className="position-relative d-flex flex-row-reverse col-12">
                                <input type="search" name="search" id="search" className="font-14 col-12 col-md-9 p-2 border "
                                       placeholder="جستجو"/>
                                <button
                                    className="center h-100 bg-default border-none rounded position-absolute p-3 ">
                                    <i className="icon icon-Search-2 font-14"></i></button>
                            </label>
                        </form>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap  rounded">
                    {/*menu*/}
                    <div className="col-12  d-flex justify-content-between align-items-center border-bottom rounded-pill p-2 px-4">
                        <div className="col-6 p-2">عنوان</div>
                        <div className="col-3 p-2">عملیات</div>
                    </div>
                    {/*list*/}
                    <div className="col-12 d-flex justify-content-between flex-wrap ">
                        <div className="col-12 my-1 d-flex  align-items-center justify-content-between border-bottom shadow-sm border-top rounded p-3 ">
                            <div className="col-6 col-xl-6 ">FinanceSuperAdmin</div>
                            <div className="col-6 col-xl-3">
                                <Link to="/role-user" className="btn col-6 col-xl-auto mx-xl-1 text-nowrap btn-success border-none text-white font-16-rem">کاربران</Link>
                                <Link to="/role-permission" className="btn col-6 col-xl-auto mx-xl-1 text-nowrap btn-secondary border-none text-white font-16-rem">دسترسی ها</Link>
                                <Link to="/role-edit" className="btn col-6 col-xl-auto mx-xl-1 text-nowrap btn-warning text-white border-none  font-16-rem">ویرایش</Link>
                                <button className="btn col-6 col-xl-auto mx-xl-1 text-nowrap btn-danger border-none text-white font-16-rem">حذف</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Role;