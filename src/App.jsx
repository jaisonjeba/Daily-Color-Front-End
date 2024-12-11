import { Profile } from "./profile.jsx";
import { Color } from "./color.jsx";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ColorPalette } from "./ColorPalette.jsx";
import { LoginPage } from "./LoginPage";
import { SignUpPage } from "./SignUpPage";
import { ForgetPass } from "./Forget";
import { VerifyOtp } from "./VerifyOtp";
import { NewPassword } from "./newPassword";
import { EmailVerification } from "./EmailVerification";
import { NotFound } from "./NotFound.jsx";
import { About } from "./About.jsx";
import { EditProfile } from "./EditProfile.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/dailycolor" element={<Color />} />
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login/forgetpassword" element={<ForgetPass />} />
        <Route exact path="/verifyotp" element={<VerifyOtp />} />
        <Route exact path="/mailverification" element={<EmailVerification />} />
        <Route exact path="/setpassword" element={<NewPassword />} />
        <Route exact path="/Morecolors" element={<ColorPalette />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/editprofile/:id" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
