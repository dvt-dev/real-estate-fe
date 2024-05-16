/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <>
                <section className="section-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">
                                            PhongTro
                                            <span className="color-b">360</span>
                                        </h3>
                                    </div>
                                    <div className="w-body-a">
                                        <p className="w-text-a color-text-a">
                                            Giá cả phải chăng, phòng trọ chất
                                            lượng cao!
                                        </p>
                                    </div>
                                    <div className="w-footer-a">
                                        <ul className="list-unstyled">
                                            <li className="color-a">
                                                <span className="color-text-a">
                                                    Email:
                                                </span>{" "}
                                                phongtro360@gmail.com
                                            </li>
                                            <li className="color-a">
                                                <span className="color-text-a">
                                                    Số điện thoại:
                                                </span>{" "}
                                                +84 366 868 668
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 section-md-t3">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">
                                            Công ty
                                        </h3>
                                    </div>
                                    <div className="w-body-a">
                                        <div className="w-body-a">
                                            <ul className="list-unstyled">
                                                <li className="item-list-a">
                                                    <a href="#">Về chúng tôi</a>
                                                </li>
                                                <li className="item-list-a">
                                                    <a href="#">Tuyển dụng</a>
                                                </li>
                                                <li className="item-list-a">
                                                    <a href="#">Đội Ngũ</a>
                                                </li>
                                                <li className="item-list-a">
                                                    <a href="#">
                                                        Chính sách bảo mật
                                                    </a>
                                                </li>
                                                <li className="item-list-a">
                                                    <a href="#">
                                                        Điều khoản sử dụng
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 section-md-t3">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">
                                            Hỗ trợ khách hàng
                                        </h3>
                                    </div>
                                    <div className="w-body-a">
                                        <ul className="list-unstyled">
                                            <li className="item-list-a">
                                                <a href="#">
                                                    Câu hỏi thường gặp
                                                </a>
                                            </li>
                                            <li className="item-list-a">
                                                <a href="#">
                                                    HƯớng dẫn đăng tin
                                                </a>
                                            </li>
                                            <li className="item-list-a">
                                                <a href="#">
                                                    Quy định đăng tin
                                                </a>
                                            </li>
                                            <li className="item-list-a">
                                                <a href="#">
                                                    Giải quyết khiếu nại
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="nav-footer">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <Link to="/">Trang chủ</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/rental-home">
                                                Nhà cho thuê
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/contact">Liên hệ</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/angent-gird">
                                                Người cho thuê
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="socials-a">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i
                                                    className="bi bi-facebook"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i
                                                    className="bi bi-twitter"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i
                                                    className="bi bi-instagram"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i
                                                    className="bi bi-linkedin"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-footer">
                                    <p className="copyright color-text-a">
                                        &copy; 2024 Copyright
                                        <span className="color-a">
                                            EstateAgency
                                        </span>{" "}
                                        All Rights Reserved.
                                    </p>
                                </div>
                                <div className="credits">
                                    Designed by _dtuan.174 CNTT3 K61
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
