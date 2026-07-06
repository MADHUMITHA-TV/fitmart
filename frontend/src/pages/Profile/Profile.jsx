import { Container } from "@mui/material";

import ProfileHeader from "../../components/profile/ProfileHeader";
import StatsCards from "../../components/profile/StatsCards";
import PersonalInfo from "../../components/profile/PersonalInfo";
import AddressCard from "../../components/profile/AddressCard";
import RecentOrders from "../../components/profile/RecentOrders";
import WishlistPreview from "../../components/profile/WishlistPreview";
import SettingsCards from "../../components/profile/SettingsCards";
function Profile() {

  return (

    <Container
      maxWidth="lg"
      sx={{
        mt:15,
        mb:8
      }}
    >

      <ProfileHeader />

      <StatsCards />

      <PersonalInfo />

      <AddressCard />
      <RecentOrders/>
      <WishlistPreview/>
      <SettingsCards />

    </Container>

  );

}

export default Profile;