"use client";

import { useForm } from "react-hook-form";
import { X } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ScheduleModalProps = {
  scheduleCall: boolean;
  setScheduleCall: (v: boolean) => void;
};

export default function ScheduleModal({
  scheduleCall,
  setScheduleCall,
}: ScheduleModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("submitted");
    reset();
    setScheduleCall(false);
  };

  if (!scheduleCall) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-lg w-full animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Schedule a Call</h2>
          <button
            onClick={() => setScheduleCall(false)}
            className="p-1 hover:bg-muted rounded-lg"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
              })}
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows={3}
              placeholder="Your Message (optional)"
              {...register("message")}
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-7 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition shadow-lg shadow-blue-500/30"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
