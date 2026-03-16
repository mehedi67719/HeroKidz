"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Authbutton = () => {
    const session=useSession();

    // console.log(session)
    return (
        <div>
            {
                session.status=="authenticated"?<>
                <button onClick={()=>signOut()} className='btn btn-primary '>Logout</button>
                </>:<>
                <Link href={"/login"} className='btn btn-primary'>Login</Link>
                </>
            }
        </div>
    );
};

export default Authbutton;