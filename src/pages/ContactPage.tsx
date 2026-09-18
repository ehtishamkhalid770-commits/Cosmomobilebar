import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { BookingForm } from '../components/BookingForm';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  initialDate?: string;
  initialGuests?: number;
  initialPackageId?: string;
  initialEventType?: string;
  selectedCocktailNames?: string[];
  estimatedTotal?: number;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  initialDate,
  initialGuests,
  initialPackageId,
  initialEventType,
  selectedCocktailNames,
  estimatedTotal,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Page Header Banner */}
      <PageBanner
        eyebrow="Reserve Your Celebration Date"
        title="Let’s Craft an"
        scriptAccent="Unforgettable Celebration"
        subtitle="Dates book rapidly for prime weekend weddings and gala seasons. Share your event details below to receive a personalized proposal and alcohol shopping guide."
        currentPageTitle="Contact & Booking"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* 2. Full Booking Form & Venue Logistics */}
      <BookingForm
        initialDate={initialDate}
        initialGuests={initialGuests}
        initialPackageId={initialPackageId}
        initialEventType={initialEventType}
        selectedCocktailNames={selectedCocktailNames}
        estimatedTotal={estimatedTotal}
      />
    </div>
  );
};
