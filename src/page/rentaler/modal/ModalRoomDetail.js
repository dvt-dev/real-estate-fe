// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getRoom } from "../../../services/fetch/ApiUtils";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Map from "../map/MyMapComponent";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Button, Comment, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

const ModalRoomDetails = ({ roomId }) => {
    const [comments, setComments] = useState();
    const [roomData, setRoomData] = useState({
        title: "",
        description: "",
        price: 0,
        latitude: 0.0,
        longitude: 0.0,
        address: "",
        locationId: 0,
        category: [
            {
                id: "",
                name: "",
            },
        ],
        assets: [{ name: "", number: "" }],
        roomMedia: [],
        user: "",
    });

    useEffect(() => {
        getRoom(roomId)
            .then((response) => {
                const room = response;
                setRoomData((prevState) => ({
                    ...prevState,
                    ...room,
                }));
            })
            .catch((error) => {
                toast.error(
                    (error && error.message) ||
                        "Oops! Có điều gì đó xảy ra. Vui lòng thử lại!"
                );
            });
        fetchComments();
    }, [roomId]);

    const fetchComments = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/room/${roomId}/comments`
            );
            const comments = response.data; // Assuming API returns comments data
            setComments(comments);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    console.log(roomData);
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">
                                    {roomData?.title}
                                </h1>
                                <span className="color-text-a">
                                    {roomData?.address}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="property-single nav-arrow-b">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div
                                id="property-single-carousel"
                                className="swiper"
                            >
                                <Swiper
                                    navigation={true}
                                    modules={[Navigation]}
                                    classNameName="swiper-wrapper"
                                >
                                    {roomData.roomMedia.map((item) => {
                                        return (
                                            <SwiperSlide classNameName="carousel-item-b swiper-slide">
                                                <img
                                                    src={
                                                        "http://localhost:8080/image/" +
                                                        item.files
                                                    }
                                                    alt=""
                                                    style={{ width: "100%" }}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                            <div className="property-single-carousel-pagination carousel-pagination"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row justify-content-between">
                                <div className="col-md-5 col-lg-4">
                                    <div className="property-price d-flex justify-content-center foo">
                                        <div className="card-header-c d-flex">
                                            <div className="card-box-ico">
                                                <span className="bi bi-cash"></span>
                                            </div>
                                            <div className="card-title-c align-self-center">
                                                <h5
                                                    className="title-c"
                                                    style={{
                                                        paddingLeft: "30px",
                                                    }}
                                                >
                                                    {roomData?.price.toLocaleString(
                                                        "vi-VN",
                                                        {
                                                            style: "currency",
                                                            currency: "VND",
                                                        }
                                                    )}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-summary">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d section-t4">
                                                    <h3 className="title-d">
                                                        Tóm tắt nhanh
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="summary-list">
                                            <ul className="list">
                                                <li className="d-flex justify-content-between">
                                                    <strong>Mã ID:</strong>
                                                    <span>{roomId}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Địa chỉ:</strong>
                                                    <span>
                                                        {roomData?.address}
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Thể loại:</strong>
                                                    <span>Phòng trọ</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Trạng thái:</strong>
                                                    <span>Chưa thuê</span>
                                                </li>
                                                {roomData.assets.map(
                                                    (asset, index) => (
                                                        <li className="d-flex justify-content-between">
                                                            <strong>
                                                                {asset.name}:
                                                            </strong>
                                                            <span>
                                                                <sup>
                                                                    {
                                                                        asset.number
                                                                    }
                                                                </sup>
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 section-md-t3">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">
                                                    Kê khai tài sản
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-description">
                                        <p className="description color-text-a">
                                            {roomData.description}
                                        </p>
                                    </div>
                                    {/* <div className="row section-t3">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">
                                                    Tiện ích
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="amenities-list color-text-a">
                                        <ul className="list-a no-margin">
                                            <li>Ban công</li>
                                            <li>Bể bơi</li>
                                            <li>Trần phơi</li>
                                            <li>Khu vui chơi</li>
                                            <li>Phòng tenis</li>
                                            <li>Khu vệ sinh</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-10 offset-md-1">
                            <ul
                                className="nav nav-pills-a nav-pills mb-3 section-t3"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        id="pills-video-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-video"
                                        role="tab"
                                        aria-controls="pills-video"
                                        aria-selected="true"
                                    >
                                        Video
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="pills-plans-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-plans"
                                        role="tab"
                                        aria-controls="pills-plans"
                                        aria-selected="false"
                                    >
                                        Sơ đồ tầng
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="pills-map-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-map"
                                        role="tab"
                                        aria-controls="pills-map"
                                        aria-selected="false"
                                    >
                                        Địa chỉ
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-video"
                                    role="tabpanel"
                                    aria-labelledby="pills-video-tab"
                                >
                                    <iframe
                                        src="https://player.vimeo.com/video/73221098"
                                        width="100%"
                                        height="460"
                                        frameborder="0"
                                        webkitallowfullscreen
                                        mozallowfullscreen
                                        allowfullscreen
                                    ></iframe>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-plans"
                                    role="tabpanel"
                                    aria-labelledby="pills-plans-tab"
                                >
                                    <img
                                        src="../../assets/img/plan2.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-map"
                                    role="tabpanel"
                                    aria-labelledby="pills-map-tab"
                                >
                                    <Map
                                        latitude={roomData.latitude}
                                        longitude={roomData.longitude}
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <div className="row section-t3">
                                <div className="col-sm-12">
                                    <div className="title-box-d">
                                        <h3 className="title-d">Liên hệ</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <img
                                        src={roomData.user.imageUrl}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="property-agent">
                                        <h4 className="title-agent">
                                            {roomData.user.name}
                                        </h4>
                                        <p className="color-text-a">
                                            Phòng luôn chất lượng đảm bảo đúng
                                            sự thật và không các chi tiết khiến
                                            người dùng thất vọng khi đến xem và
                                            kiểm tra phòng. An ninh tuyệt đối.
                                        </p>
                                        <ul className="list-unstyled">
                                            <li className="d-flex justify-content-between">
                                                <strong>Điện thoại:</strong>
                                                <span className="color-text-a">
                                                    {roomData.user.phone}
                                                </span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <strong>Email:</strong>
                                                <span className="color-text-a">
                                                    {roomData.user.email}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="property-contact">
                                        <form className="form-a">
                                            <div className="row">
                                                <div className="col-md-12 mb-1">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-lg form-control-a"
                                                            id="inputName"
                                                            placeholder="Name *"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-1">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control form-control-lg form-control-a"
                                                            id="inputEmail1"
                                                            placeholder="Email *"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-1">
                                                    <div className="form-group">
                                                        <textarea
                                                            id="textMessage"
                                                            className="form-control"
                                                            placeholder="Comment *"
                                                            name="message"
                                                            cols="45"
                                                            rows="8"
                                                            required
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-a"
                                                    >
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row section-t3">
                                <div className="col-sm-12">
                                    <div className="title-box-d">
                                        <h3 className="title-d">
                                            Bình luận và đánh giá
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="property-agent">
                                        {/* <h4 className="title-agent">{rooms ? rooms.user.name : ""}</h4> */}
                                        <Comment.Group>
                                            {comments &&
                                                comments.map((comment) => (
                                                    <Comment>
                                                        <Comment.Content
                                                            style={{
                                                                padding: "1rem",
                                                            }}
                                                        >
                                                            <Stack spacing={1}>
                                                                <Rating
                                                                    name="half-rating"
                                                                    defaultValue={
                                                                        comment.rateRating
                                                                    }
                                                                    precision={
                                                                        0.5
                                                                    }
                                                                    readOnly
                                                                />
                                                            </Stack>
                                                            {comment.user
                                                                .imageUrl ? (
                                                                <Comment.Avatar
                                                                    src={
                                                                        comment
                                                                            .user
                                                                            .imageUrl
                                                                    }
                                                                    style={{
                                                                        marginRight:
                                                                            "10px",
                                                                    }}
                                                                />
                                                            ) : (
                                                                <Comment.Avatar
                                                                    src="../../assets/img/agent-1.jpg"
                                                                    style={{
                                                                        marginRight:
                                                                            "10px",
                                                                    }}
                                                                />
                                                            )}
                                                            <Comment.Author as="a">
                                                                {
                                                                    comment.user
                                                                        .name
                                                                }
                                                            </Comment.Author>
                                                            <Comment.Metadata>
                                                                <div>
                                                                    {
                                                                        comment.createdAt
                                                                    }
                                                                </div>
                                                            </Comment.Metadata>
                                                            <Comment.Text>
                                                                {
                                                                    comment.content
                                                                }
                                                            </Comment.Text>
                                                        </Comment.Content>
                                                    </Comment>
                                                ))}
                                        </Comment.Group>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ModalRoomDetails;
