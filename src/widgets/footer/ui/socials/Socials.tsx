import { MailIcon, TelegramIcon } from "@/shared/assets";
import Image from "next/image";
import Link from "next/link";

interface SocialsProps {}

export const Socials = ({}: SocialsProps) => {
   return (
      <div className="flex gap-1.5 mb-13">
         <Link href="mailto:marbelous.store@yandex.ru">
            <Image src={MailIcon} alt="Mail" width={48} height={48} />
         </Link>
         <Link href="https://t.me/marbelouss">
            <Image src={TelegramIcon} alt="Telegram" width={48} height={48} />
         </Link>
      </div>
   );
};
