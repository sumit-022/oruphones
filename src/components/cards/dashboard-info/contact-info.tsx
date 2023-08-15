import React from "react";
import ContactField from "../../forms/contact-field";
import DashboardInfo from ".";

const ContactInfo: React.FC<DashboardInfoType> = ({ user, setOpened }) => {
  return (
    <DashboardInfo className="rounded-md p-4">
      <div className="flex flex-col gap-4">
        <ContactField
          fieldName="Your Name"
          fieldValue={`${user.firstName} ${user.lastName}`}
          onEdit={() => setOpened?.({ state: true, type: "name" })}
        />
        <ContactField
          fieldName="Email"
          fieldValue={user.email}
          onEdit={() => setOpened?.({ state: true, type: "email" })}
        />
        <ContactField
          fieldName="Phone Number"
          fieldValue={`+91 ${user.phone}`}
          onEdit={() => setOpened?.({ state: true, type: "phone" })}
        />
      </div>
    </DashboardInfo>
  );
};

export default ContactInfo;
