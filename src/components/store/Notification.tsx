import { Check } from 'lucide-react';

interface NotificationProps {
  message: string;
  show: boolean;
}

const Notification = ({ message, show }: NotificationProps) => {
  if (!show) return null;
  
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded shadow-2xl z-50 flex items-center animate-fade-in-up">
      <Check size={18} className="mr-2" />
      <span className="font-medium text-sm">{message}</span>
    </div>
  );
};

export default Notification;
