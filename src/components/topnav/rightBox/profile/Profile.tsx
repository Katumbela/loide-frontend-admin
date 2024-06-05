import { useEffect, useState } from "react";
import { images } from "../../../../constants";
import classes from "./Profile.module.scss";
import { useTranslation } from "react-i18next";
import { LoginResponse } from "../../../../interfaces/userInterface";

function Profile() {
  const { t } = useTranslation();
  const [user, setUser] = useState<LoginResponse | null>(null);

  useEffect(() => {
    const get = () => {
      const u = localStorage.getItem("account");
      if (u) {
        try {
          const account: LoginResponse = JSON.parse(u);
          //console.log(account);
          setUser(account);
        } catch (error) {
          console.error("Error parsing account data:", error);
        }
      }
    };

    get();
  }, []);

  return (
    <div className={classes.profile}>
      <div className={classes.profile__avatar}>
        <img src={images.avt} alt="avatar" />
      </div>
      <div className={classes.profile__info}>
        <p className={classes.profile__userName}> {user?.user.name.split(' ')[0] + ' ' + user?.user.name.split(' ').pop()} </p>
        {/* <span className={classes.profile__role}>{t("admin")}</span> */}
      </div>
    </div>
  );
}

export default Profile;
