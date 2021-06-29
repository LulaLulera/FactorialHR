class ContactSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :last_name, :email, :phone_number
end
