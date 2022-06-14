import Image from "next/image";
import logo from '../../../public/img/donapets-title.png';

export function Logo() {
    return (
        <div>
            <Image src={logo} />
        </div>
    );
}