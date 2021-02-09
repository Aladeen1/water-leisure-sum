class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :date
      t.integer :speedboat
      t.integer :jetski
      t.integer :hurricane
      t.integer :banana
      t.string :phone
      t.string :status

      t.timestamps
    end
  end
end
