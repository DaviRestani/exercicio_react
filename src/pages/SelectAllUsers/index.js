import { FaUserNinja } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function SelectAllUsers() {

    const [ users, setUsers ] = useState();
    const [email, setEmail] = useState('');

    const SelectUsers = async () => {
        try {
            const response = await ClientUsers.selectAllUsers();
            setUsers(response);
            console.log(users);
        } catch (e) {
            toast.error('A busca falhou!');
            console.log(e.response.data);
        }
    }

    useEffect(() => {
        SelectUsers();
    }, [])

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Selecionar novo usuário">
                    <FaUserNinja size={30} />
                </Title>

                <h1>Usuários</h1>

                {
                    users.map((item, index) => {
                        return (
                            <div className="container" id={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </div>
                        )
                    })
                }

                <h1>Usuario por id</h1>


                <form className="form-profile" onSubmit={SelectUsers}>
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Salvar</button>
                </form>
                {
                    users.map((item, index) => {
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