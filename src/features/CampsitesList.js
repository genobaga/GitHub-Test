import { Col, Row } from 'reactstrap';
import { CAMPSITES } from '../app/shared/CAMPSITES';
// import {Col, Row} from 'reactstrap';
import CampsiteCard from "./campsites/CampsiteCard";


const CampsitesList = () => {
    return (
        <Row className='ms-auto'>
            {CAMPSITES.map((campsites) => {
                return (
                    <Col md='5' className='m-4' key={campsites.id}>
                        <CampsiteCard campsite={campsites}/>
                    </Col>
                )
            })}
        </Row>
    )
}

export default CampsitesList