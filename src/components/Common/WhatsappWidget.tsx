import { FC } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsappWidget: FC = () => {
  return (
    <FloatingWhatsApp
      phoneNumber={`${process.env.NEXT_PUBLIC_WHATSAPP}`}
      accountName="POP Tour"
      avatar="/assets/img/logo/POPTour.jpg"
      chatMessage={`Halo👋🏻,\nAda yang bisa kami bantu?`}
      placeholder="Tulis pesan disini..."
      // buttonStyle={{
      //   backgroundColor: '#4dc247',
      //   width: '50px',
      //   height: '50px',
      // }}
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  );
};

export default WhatsappWidget;
