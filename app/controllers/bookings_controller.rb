class BookingsController < ApplicationController
	def new
		@booking = Booking.new
	end

	def create
		@booking = Booking.new(booking_params)
    	@booking.save!
    	redirect_to booking_path(@booking)
	end

	def show
		@booking = Booking.find(params[:id])
	end

	private

	def booking_params
    	params.require(:booking).permit(:date, :speedboat, :jetski, :hurricane, :banana)
	end
end
