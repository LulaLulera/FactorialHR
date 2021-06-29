class ContactSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :last_name, :email, :phone_number
end
