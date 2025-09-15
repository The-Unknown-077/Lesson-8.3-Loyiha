import { memo, useState } from 'react';
import { useAuth } from '../../auth/service/useAuth';
import { Button } from 'antd';
import UpdForm from '../components/UpdForm';

const Profile = () => {

    const { getProfile } = useAuth()

    const { data } = getProfile()

    const maplashga = data?.data

    console.log(data?.data);

    const [open, setOpen] = useState(false);



    return (
        <div className="Profile">
            <div className="">
                <Button onClick={() => setOpen(true)}>Update</Button>

                {maplashga &&
                    <div key={maplashga.id}>
                        <h1>{maplashga.fname}</h1>
                        <h1>{maplashga.lname}</h1>
                        <p>{maplashga.email}</p>
                        <p>{maplashga?.address}</p>
                        <p>{maplashga.id}</p>
                    </div>
                }

                <UpdForm open={open} setOpen={setOpen}/>

            </div>
        </div>
    );
};

export default memo(Profile);