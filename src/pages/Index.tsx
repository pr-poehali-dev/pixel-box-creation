import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import EditorPage from "@/components/EditorPage";
import GalleryPage from "@/components/GalleryPage";
import InstructionsPage from "@/components/InstructionsPage";
import BuyPage from "@/components/BuyPage";
import ContactsPage from "@/components/ContactsPage";
import AdminPage from "@/components/AdminPage";
import PrivacyPage from "@/components/PrivacyPage";
import TermsPage from "@/components/TermsPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mosaicType, setMosaicType] = useState("lego");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} onMosaicTypeSelect={setMosaicType} />;
      case "editor":
        return <EditorPage initialMosaicType={mosaicType} />;
      case "gallery":
        return <GalleryPage />;
      case "instructions":
        return <InstructionsPage />;
      case "buy":
        return <BuyPage />;
      case "contacts":
        return <ContactsPage />;
      case "admin":
        return <AdminPage />;
      case "privacy":
        return <PrivacyPage onNavigate={setCurrentPage} />;
      case "terms":
        return <TermsPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} onMosaicTypeSelect={setMosaicType} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {currentPage !== "privacy" && currentPage !== "terms" && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
      {renderPage()}
    </div>
  );
};

export default Index;