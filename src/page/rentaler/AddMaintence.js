import { Navigate } from 'react-router-dom';
import Nav from './Nav';
import SidebarNav from './SidebarNav';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllRoomOfRentaler } from '../../services/fetch/ApiUtils';
import MaintenanceService from '../../services/axios/MaintenanceService';


function AddMaintence(props) {
    const { authenticated, role, currentUser, location, onLogout } = props;

    const [roomOptions, setRoomOptions] = useState([]);

    const [contractData, setContractData] = useState({
        maintenanceDate: '',
        roomId: '',
        price: '',
        files: []
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContractData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        setContractData(prevState => ({
            ...prevState,
            files: [...prevState.files, ...event.target.files]
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('maintenanceDate', contractData.maintenanceDate);
        formData.append('roomId', contractData.roomId);
        formData.append('price', contractData.price);
        contractData.files.forEach((file, index) => {
            formData.append(`files`, file);
        });
        console.log(formData.getAll)
        MaintenanceService.addNewMaintenance(formData)
            .then(response => {
                toast.success(response.message);
                toast.success("Phiếu bảo trì lưu thành công!!")

            })
            .then(data => {
                console.log(data);
                // Do something with the response data here
                setContractData({
                    maintenanceDate: '',
                    roomId: '',
                    price: '',
                    files: []
                });
            })
            .catch(error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            });

        console.log(contractData);
    };

    useEffect(() => {
        getAllRoomOfRentaler(1,1000,'')
            .then(response => {
                const room = response.content;
                setRoomOptions(room);
            })
            .catch(error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            });
    }, []);


    if (!authenticated) {
        return <Navigate
            to={{
                pathname: "/login-rentaler",
                state: { from: location }
            }} />;
    }
    return (
        <>
            <div className="wrapper">
                <nav id="sidebar" className="sidebar js-sidebar">
                    <div className="sidebar-content js-simplebar">
                        <a className="sidebar-brand" href="index.html">
                            <span className="align-middle">RENTALER PRO</span>
                        </a>
                        <SidebarNav />
                    </div>
                </nav>

                <div className="main">
                    <Nav onLogout={onLogout} currentUser={currentUser} />

                    <br />
                    <div className="container-fluid p-0">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Thiết lập phiếu bảo trì</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                        <label className="form-label" htmlFor="locationId">Chọn phòng</label>
                                        <select className="form-select" id="locationId" name="roomId" value={contractData.roomId} onChange={handleInputChange}>
                                            <option value="">Chọn...</option>
                                            {roomOptions.map(roomOption => (
                                                <option key={roomOption.id} value={roomOption.id}>{roomOption.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="price">Chi Phí Bảo Trì</label>
                                        <input type="number" className="form-control" id="price" name="price" 
                                        onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="price">Thời Gian</label>
                                        <input type="datetime-local" className="form-control" id="price" name="maintenanceDate" 
                                        onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="mb-3">
                                            <label className="form-label">Tải Phiếu Bảo Trì</label>
                                            <input className="form-control" type="file" accept=".pdf" name="files" multiple onChange={handleFileChange} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

        </>
    )
}

export default AddMaintence;