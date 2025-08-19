import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

interface EventCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  price: string;
}

const EventCard = ({
  image,
  title,
  category,
  date,
  time,
  location,
  price,
}: EventCardProps) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-blue-700 shadow-sm flex items-center gap-1">
          <Ticket className="h-3.5 w-3.5" />
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
          {title}
        </h3>

        <div className="mt-3 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-500" />
            <span>{date}</span>
            <span className="text-gray-400">•</span>
            <Clock className="h-4 w-4 text-blue-500" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          <button className="px-4 py-2 text-sm rounded-full bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 hover:shadow-md transition-all">
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
