import { FaUserNinja } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';

import './style.css';


export default function SelectbyEmail() {

    const [user, setUser] = useState();
    const [email, setEmail] = useState('');

    const SelectUser = async (e) => {
        e.preventDefault();
        try {
            const response = await ClientUsers.selectUserbyEmail(email);
            setUser(response);
        } catch (e) {
            toast.error('A busca falhou!');
            console.log(e);
        }
    }

    useEffect(() => {
        SelectUser();
    }, [])

    return (
        <div >
            <Sidebar />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1>Busca de usuario por email</h1>


                <form className="form-profile" onSubmit={SelectUser}>
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <button type="submit">Salvar</button>
                </form>
                {
                    user &&
                    user.map((item, index) => {
                        return (
                            <div className="container" id={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}