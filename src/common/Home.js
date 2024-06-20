/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    getAllAccountRentalerForCustomer,
    getAllRoomOfCustomer,
} from "../services/fetch/ApiUtils";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPages: 3,
            rooms: [], // Mảng lưu trữ danh sách phòng trọ từ API
            sortingOption: "Thời gian: Mới đến cũ",
            rentaler: [],
        };
    }

    // Gọi API để lấy danh sách phòng trọ sau khi component được khởi tạo
    componentDidMount() {
        this.fetchRooms(this.state.currentPage);
    }

    // Hàm gọi API lấy danh sách phòng trọ
    fetchRooms = () => {
        //console.log(pageNo)
        getAllRoomOfCustomer(1, 3, "", "", "")
            .then((response) => {
                this.setState({
                    rooms: response.content,
                });
            })
            .catch((error) => {
                toast.error(
                    (error && error.message) ||
                        "Oops! Có điều gì đó xảy ra. Vui lòng thử lại!"
                );
            });

        getAllAccountRentalerForCustomer(1, 7)
            .then((response) => {
                this.setState({
                    rentaler: response.content,
                });
            })
            .catch((error) => {
                toast.error(
                    (error && error.message) ||
                        "Oops! Có điều gì đó xảy ra. Vui lòng thử lại!"
                );
            });
    };

    render() {
        const { rooms, rentaler } = this.state;

        return (
            <main id="main">
                <section className="section-services section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">
                                            Dịch vụ của chúng tôi
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-house"></span>
                                        </div>

                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c ms-4">
                                                Tiện lợi
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Tìm kiếm ngôi nhà mới dễ dàng, nhanh
                                            chóng .{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-people"></span>
                                        </div>

                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c ms-4">
                                                Uy tín
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Liên hệ với những người cho thuê uy
                                            tín hàng đầu.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-shield-check"></span>
                                        </div>

                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c ms-4">
                                                An toàn
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Bảo mật thông tin an toàn tuyệt đối.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-property section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">
                                            Bài đăng mới nhất
                                        </h2>
                                    </div>
                                    <div className="title-link">
                                        <a href="/rental-home">
                                            Tất cả bài đăng
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="property-grid grid">
                            <div className="d-flex flex-wrap">
                                {rooms.map((room) => (
                                    <div className="col-md-4">
                                        <div className="card-box-a card-shadow">
                                            <div className="img-box-a">
                                                {room.roomMedia[0] ? (
                                                    <img
                                                        src={
                                                            "http://localhost:8080/image/" +
                                                            room.roomMedia[0]
                                                                .files
                                                        }
                                                        alt=""
                                                        className="img-a img-fluid"
                                                        style={{
                                                            // width: "350px",
                                                            height: "450px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                ) : (
                                                    <img
                                                        src="assets/img/property-1.jpg"
                                                        alt=""
                                                        className="img-a img-fluid"
                                                        style={{
                                                            // width: "350px",
                                                            height: "450px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                )}
                                            </div>
                                            <div className="card-overlay">
                                                <div className="card-overlay-a-content">
                                                    <div className="card-header-a">
                                                        <h2 className="card-title-a">
                                                            <Link
                                                                to={`/rental-home/${room.id}`}
                                                            >
                                                                <b>
                                                                    {room.title}
                                                                </b>
                                                                <br />{" "}
                                                                {/* <small>
                                                                    {
                                                                        room.description
                                                                    }
                                                                </small> */}
                                                            </Link>
                                                        </h2>
                                                    </div>
                                                    <div className="card-body-a">
                                                        <div className="price-box d-flex">
                                                            <span className="price-a">
                                                                {room.status ===
                                                                    "ROOM_RENT" &&
                                                                    `Cho thuê |  ${room.price.toLocaleString(
                                                                        "vi-VN",
                                                                        {
                                                                            style: "currency",
                                                                            currency:
                                                                                "VND",
                                                                        }
                                                                    )}`}
                                                                {room.status ===
                                                                    "HIRED" &&
                                                                    `Đã thuê | ${room.price.toLocaleString(
                                                                        "vi-VN",
                                                                        {
                                                                            style: "currency",
                                                                            currency:
                                                                                "VND",
                                                                        }
                                                                    )}`}
                                                                {room.status ===
                                                                    "CHECKED_OUT" &&
                                                                    `Đã trả phòng | ${room.price.toLocaleString(
                                                                        "vi-VN",
                                                                        {
                                                                            style: "currency",
                                                                            currency:
                                                                                "VND",
                                                                        }
                                                                    )}`}
                                                            </span>
                                                        </div>
                                                        <Link
                                                            to={`/rental-home/${room.id}`}
                                                            style={{
                                                                color: "#2eca6a",
                                                            }}
                                                        >
                                                            Xem chi tiết
                                                            <span className="bi bi-chevron-right"></span>
                                                        </Link>
                                                    </div>
                                                    <div className="card-footer-a">
                                                        <ul className="card-info d-flex justify-content-around">
                                                            <li>
                                                                <h4 className="card-info-title">
                                                                    Vị trí
                                                                </h4>
                                                                <span>
                                                                    {
                                                                        room
                                                                            .location
                                                                            .cityName
                                                                    }
                                                                    <sup></sup>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <h4 className="card-info-title">
                                                                    Loại
                                                                </h4>
                                                                <span>
                                                                    {
                                                                        room
                                                                            .category
                                                                            .name
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <h4 className="card-info-title">
                                                                    Người cho
                                                                    thuê
                                                                </h4>
                                                                <span>
                                                                    {
                                                                        room
                                                                            .user
                                                                            .name
                                                                    }
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </section>
                <section className="section-agents section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">
                                            Người cho thuê
                                        </h2>
                                    </div>
                                    <div className="title-link">
                                        <a href="/agent-grid">
                                            Tất cả người cho thuê trọ
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {rentaler.map((rentaler) => {
                                if (
                                    rentaler.roles[0] &&
                                    rentaler.roles[0].name === "ROLE_RENTALER"
                                ) {
                                    return (
                                        <div className="col-md-4">
                                            <div className="card-box-d">
                                                <div className="card-img-d">
                                                    {rentaler?.imageUrl ? (
                                                        <img
                                                            src={
                                                                rentaler?.imageUrl
                                                            }
                                                            alt=""
                                                            className="img-d img-fluid"
                                                            style={{
                                                                height: "392px",
                                                                width: "100%",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        />
                                                    ) : (
                                                        <img
                                                            src="assets/img/agent-4.jpg"
                                                            alt=""
                                                            className="img-d img-fluid"
                                                        />
                                                    )}
                                                </div>
                                                <div className="card-overlay card-overlay-hover">
                                                    <div className="card-header-d">
                                                        <div className="card-title-d align-self-center">
                                                            <h3 className="title-d">
                                                                <Link
                                                                    to={
                                                                        `/angent-single/` +
                                                                        rentaler.id
                                                                    }
                                                                    className="link-two"
                                                                >
                                                                    {
                                                                        rentaler?.name
                                                                    }
                                                                </Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="card-body-d">
                                                        <p
                                                            className="content-d color-text-a"
                                                            style={{
                                                                color: "white",
                                                            }}
                                                        >
                                                            {rentaler?.address}
                                                        </p>
                                                        <div className="info-agents color-a">
                                                            <p
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                <strong>
                                                                    Phone:{" "}
                                                                </strong>{" "}
                                                                {
                                                                    rentaler?.phone
                                                                }
                                                            </p>
                                                            <p
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                <strong>
                                                                    Email:{" "}
                                                                </strong>{" "}
                                                                {
                                                                    rentaler?.email
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer-d">
                                                        <div className="socials-footer d-flex justify-content-center">
                                                            <ul className="list-inline">
                                                                {rentaler?.facebookUrl ? (
                                                                    <li
                                                                        className="list-inline-item"
                                                                        style={{
                                                                            fontSize:
                                                                                "40px",
                                                                        }}
                                                                    >
                                                                        <a
                                                                            href={
                                                                                rentaler?.facebookUrl
                                                                            }
                                                                            className="link-one"
                                                                            rel="noreferer"
                                                                        >
                                                                            <i
                                                                                className="bi bi-facebook"
                                                                                aria-hidden="true"
                                                                            ></i>
                                                                        </a>
                                                                    </li>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {rentaler?.zaloUrl ? (
                                                                    <li
                                                                        className="list-inline-item"
                                                                        style={{
                                                                            fontSize:
                                                                                "40px",
                                                                        }}
                                                                    >
                                                                        <a
                                                                            href={
                                                                                rentaler?.zaloUrl
                                                                            }
                                                                            className="link-one"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                x="0px"
                                                                                y="0px"
                                                                                width="40"
                                                                                height="40"
                                                                                viewBox="0 0 50 50"
                                                                            >
                                                                                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 15.576172 6 C 12.118043 9.5981082 10 14.323627 10 19.5 C 10 24.861353 12.268148 29.748596 15.949219 33.388672 C 15.815412 33.261195 15.988635 33.48288 16.005859 33.875 C 16.023639 34.279773 15.962689 34.835916 15.798828 35.386719 C 15.471108 36.488324 14.785653 37.503741 13.683594 37.871094 A 1.0001 1.0001 0 0 0 13.804688 39.800781 C 16.564391 40.352722 18.51646 39.521812 19.955078 38.861328 C 21.393696 38.200845 22.171033 37.756375 23.625 38.34375 A 1.0001 1.0001 0 0 0 23.636719 38.347656 C 26.359037 39.41176 29.356235 40 32.5 40 C 36.69732 40 40.631169 38.95117 44 37.123047 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 18.496094 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 34.804688 C 40.72689 36.812719 36.774644 38 32.5 38 C 29.610147 38 26.863646 37.459407 24.375 36.488281 C 22.261967 35.634656 20.540725 36.391201 19.121094 37.042969 C 18.352251 37.395952 17.593707 37.689389 16.736328 37.851562 C 17.160501 37.246758 17.523335 36.600775 17.714844 35.957031 C 17.941109 35.196459 18.033096 34.45168 18.003906 33.787109 C 17.974816 33.12484 17.916946 32.518297 17.357422 31.96875 L 17.355469 31.966797 C 14.016928 28.665356 12 24.298743 12 19.5 C 12 14.177406 14.48618 9.3876296 18.496094 6 z M 32.984375 14.986328 A 1.0001 1.0001 0 0 0 32 16 L 32 25 A 1.0001 1.0001 0 1 0 34 25 L 34 16 A 1.0001 1.0001 0 0 0 32.984375 14.986328 z M 18 16 A 1.0001 1.0001 0 1 0 18 18 L 21.197266 18 L 17.152344 24.470703 A 1.0001 1.0001 0 0 0 18 26 L 23 26 A 1.0001 1.0001 0 1 0 23 24 L 19.802734 24 L 23.847656 17.529297 A 1.0001 1.0001 0 0 0 23 16 L 18 16 z M 29.984375 18.986328 A 1.0001 1.0001 0 0 0 29.162109 19.443359 C 28.664523 19.170123 28.103459 19 27.5 19 C 25.578848 19 24 20.578848 24 22.5 C 24 24.421152 25.578848 26 27.5 26 C 28.10285 26 28.662926 25.829365 29.160156 25.556641 A 1.0001 1.0001 0 0 0 31 25 L 31 22.5 L 31 20 A 1.0001 1.0001 0 0 0 29.984375 18.986328 z M 38.5 19 C 36.578848 19 35 20.578848 35 22.5 C 35 24.421152 36.578848 26 38.5 26 C 40.421152 26 42 24.421152 42 22.5 C 42 20.578848 40.421152 19 38.5 19 z M 27.5 21 C 28.340272 21 29 21.659728 29 22.5 C 29 23.340272 28.340272 24 27.5 24 C 26.659728 24 26 23.340272 26 22.5 C 26 21.659728 26.659728 21 27.5 21 z M 38.5 21 C 39.340272 21 40 21.659728 40 22.5 C 40 23.340272 39.340272 24 38.5 24 C 37.659728 24 37 23.340272 37 22.5 C 37 21.659728 37.659728 21 38.5 21 z"></path>
                                                                            </svg>
                                                                        </a>
                                                                    </li>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </section>

                <section className="section-testimonials section-t8 nav-arrow-a">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">
                                            Đánh giá về chúng tôi
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="testimonial-carousel" className="swiper">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="swiper-wrapper"
                            >
                                <SwiperSlide className="carousel-item-b swiper-slide">
                                    <div className="carousel-item-a swiper-slide">
                                        <div className="testimonials-box">
                                            <div className="row">
                                                {/* <div className="col-sm-12 col-md-6">
                                                    <div className="testimonial-img">
                                                        <img
                                                            src="../assets/img/agent-6.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div> */}
                                                <div
                                                    style={{
                                                        padding: "0 100px",
                                                    }}
                                                >
                                                    <div className="testimonial-ico">
                                                        <i className="bi bi-chat-quote-fill"></i>
                                                    </div>
                                                    <div className="testimonials-content">
                                                        <p className="testimonial-text">
                                                            Các phòng trọ đều
                                                            rất tốt và người cho
                                                            thuê cũng uy tín.
                                                            Nếu tôi biết trang
                                                            web này sớm hơn thì
                                                            tôi đã không phải
                                                            khổ sở trong việc
                                                            tìm phòng trọ cho
                                                            mình.
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-author-box">
                                                        <img
                                                            src="../assets/img/agent-6.jpg"
                                                            alt=""
                                                            className="testimonial-avatar"
                                                        />
                                                        <h5 className="testimonial-author">
                                                            Lê Kiên
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="carousel-item-b swiper-slide">
                                    <div className="carousel-item-a swiper-slide">
                                        <div className="testimonials-box">
                                            <div className="row">
                                                {/* <div className="col-sm-12 col-md-6">
                                                    <div className="testimonial-img">
                                                        <img
                                                            src="../assets/img/agent-7.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div> */}
                                                <div
                                                    style={{
                                                        padding: "0 100px",
                                                    }}
                                                >
                                                    <div className="testimonial-ico">
                                                        <i className="bi bi-chat-quote-fill"></i>
                                                    </div>
                                                    <div className="testimonials-content">
                                                        <p className="testimonial-text">
                                                            Tôi đã sử dụng dịch
                                                            vụ của trang này từ
                                                            năm nhất và đều có
                                                            được nhưng căn phòng
                                                            ưng ý.
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-author-box">
                                                        <img
                                                            src="../assets/img/agent-7.jpg"
                                                            alt=""
                                                            className="testimonial-avatar"
                                                        />
                                                        <h5 className="testimonial-author">
                                                            Nguyễn Nhật Lệ
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="carousel-item-b swiper-slide">
                                    <div className="carousel-item-a swiper-slide">
                                        <div className="testimonials-box">
                                            <div className="row">
                                                {/* <div className="col-sm-12 col-md-6">
                                                    <div className="testimonial-img">
                                                        <img
                                                            src="../assets/img/agent-5.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div> */}
                                                <div
                                                    style={{
                                                        padding: "0 100px",
                                                    }}
                                                >
                                                    <div className="testimonial-ico">
                                                        <i className="bi bi-chat-quote-fill"></i>
                                                    </div>
                                                    <div className="testimonials-content">
                                                        <p className="testimonial-text">
                                                            Việc tìm kiếm phòng
                                                            trọ và liên hệ với
                                                            chủ nhà không còn là
                                                            ám ảnh đối với tôi
                                                            khi biết đến trang
                                                            web này .
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-author-box">
                                                        <img
                                                            src="../assets/img/agent-5.jpg"
                                                            alt=""
                                                            className="testimonial-avatar"
                                                        />
                                                        <h5 className="testimonial-author">
                                                            Hà Linh
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="testimonial-carousel-pagination carousel-pagination"></div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;
