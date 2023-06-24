import React from 'react';
import {Link} from "react-router-dom";

function Daily() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col p-2"> لیست پیشنهاد روزانه</h5>
                </div>
            </section>
            <div className="col-12 p-2  d-flex justify-content-end">
                <Link to="/daily/create" className="btn btn-outline-success d-flex align-items-center justify-content-center font-16-rem ">
                    <i className="icon icon-Add1 center "></i>
                    جدید
                </Link>
            </div>
            <div className="col-12 bg-zebra d-flex justify-content-between align-items-center p-2 rounded-pill">
                <div className="col-8 col-lg-6   d-flex justify-content-start align-items-center">
                    <ul className="col-8 col-lg-6 p-2 rounded-pill overflow-visible  shadow bg-white bg-opacity-25 d-flex justify-content-evenly   m-0 p-0 list-unstyled">
                        <li className="center  font-16 m-0">
                            <Link to="/" className="col-1 p-1 rounded-circle center text-decoration-none icon icon-Right-1"></Link>
                        </li>
                        <li className="center   font-16 m-0">
                            <Link to="/" className=" rounded-circle center text-decoration-none ">1</Link>
                        </li>
                        <li className="center   font-16 m-0">
                            <Link to="/" className=" rounded-circle center text-decoration-none ">2</Link>
                        </li>
                        <li className="center   font-16 m-0">
                            <Link to="/" className=" rounded-circle center text-decoration-none ">3</Link>
                        </li>
                        <li className="center  font-16 m-0">
                            <Link to="/" className="col-1 p-1 rounded-circle center text-decoration-none text-decoration-none icon icon-Left-1"></Link>
                        </li>
                    </ul>

                </div>
                <label className="col-4 col-xl-2  p-2 font-14 d-flex justify-content-center align-items-center">
                    <select className="col-12 p-1 rounded">
                        <option value="انتخاب کنید">انتخاب کنید</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
            </div>
            <div className="col-12 d-flex justify-content-between align-items-center p-2 flex-wrap">
                <span className="d-flex col-12 col-md-3 "> تعداد پیشنهادات: (97)</span>
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
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 flex-wrap bg-default p-2 rounded d-flex justify-content-between align-items-center text-white ">
                    <span className="p-2">تعداد پیشنهادات: (97)</span>
                </h6>
                <section className="col-12 p-2 d-flex flex-wrap ">
                    <div className="col-12 d-xl-flex p-2 d-none border-bottom rounded">
                        <div className="col-1 text-center">تاریخ </div>
                        <div className="col-2 text-center">وضعیت	</div>
                        <div className="col-2 text-center">	تنوع اصلی</div>
                        <div className="col-2 text-center">تنوع پیشنهاد ویژه	</div>
                        <div className="col-2 text-center">وضعیت</div>
                        <div className="col-3 text-center">عملیات</div>
                    </div>
                    <div className="col-12 d-xl-flex p-2 py-3 my-2 shadow-sm rounded">
                        <div className="col-12 col-xl-1 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">تاریخ : </span>
                            <span> 1401/08/16</span>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">
                                 وضعیت :
                            </span>
                            <span className="d-flex text-start text-xl-end ">
                               فعال
                            </span>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">تنوع اصلی: </span>
                            <div className="col col-xl-12 d-flex flex-wrap justify-content-between justify-content-xl-center align-content-between">
                                <Link className="col-xl-3 btn btn-outline-info m-xl-1 font-14-rem px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-info m-xl-1 font-14-rem px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-info m-xl-1 font-14-rem px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-info m-xl-1 font-14-rem px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-info m-xl-1 font-14-rem px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-info m-xl-1 font-14-rem px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-info m-xl-1 font-14-rem px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-info m-xl-1 font-14-rem px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-info m-xl-1 font-14-rem px-0" to="/">25595</Link>
                            </div>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">تنوع پیشنهاد ویژه	: </span>
                            <div className="col col-xl-12 d-flex flex-wrap justify-content-between justify-content-xl-center align-content-between">
                                <Link className="col-xl-3 btn btn-outline-warning m-xl-1 font-14-rem text-center px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-warning m-xl-1 font-14-rem text-center px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-warning m-xl-1 font-14-rem text-center px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-warning m-xl-1 font-14-rem text-center px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-warning m-xl-1 font-14-rem text-center px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-warning m-xl-1 font-14-rem text-center px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-warning m-xl-1 font-14-rem text-center px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-warning m-xl-1 font-14-rem text-center px-0" to="/">25595</Link>
                                <Link className="col-xl-3 btn btn-outline-warning m-xl-1 font-14-rem text-center px-0" to="/">25595</Link>
                            </div>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">تاریخ : </span>
                            <div className="col  d-flex flex-wrap justify-content-between text-start text-xl-end align-content-between">
                                <span className="col-12 text-center py-1">فعال</span>
                            </div>
                        </div>
                        <div className="col-12 col-xl-3 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <div className="col-12 d-flex justify-content-center  align-items-center">
                                <Link className="btn btn-secondary text-light font-16-rem m-1" to="/daily/show">مشاهده</Link>
                                <button className="btn btn-danger text-light font-16-rem m-1">حذف</button>
                                <button className="btn btn-warning text-light font-16-rem m-1">لغو</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Daily;