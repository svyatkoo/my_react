import {useLocation} from "react-router-dom";

const UsersDetailsPage = () => {
    const {state} = useLocation();
    const {
        id, name, username, email, phone,
        website, company, address
    } = state;

    return (
        <div>
            <h1>User Details</h1>
            <div>
                <div>
                    <p>Id: {id}</p>
                    <p>Name: {name}</p>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    <p>Company</p>
                    <ul>
                        <li>company name: {company.name}</li>
                        <li>catchPhrase: {company.catchPhrase}</li>
                        <li>bs: {company.bs}</li>
                    </ul>
                    <p>Address</p>
                    <ul>
                        <li>Street: {address.street}</li>
                        <li>Suite: {address.suite}</li>
                        <li>City: {address.city}</li>
                        <li>Zipcode: {address.zipcode}</li>
                        <p>Geo</p>
                        <li>Lat: {address.geo.lat}</li>
                        <li>Geo: {address.geo.lng}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export {UsersDetailsPage};