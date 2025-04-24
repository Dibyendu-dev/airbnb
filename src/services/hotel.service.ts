import { createhotelDTO } from "../dto/hotel.dto";
import { createhotel, getHotelById } from "../repositories/hotel.repository";

export async function createHotelService(hotelData:createhotelDTO){
    const hotel = await createhotel(hotelData)
    return hotel
}

export async function getHotelByIdService(id:number){
    const hotel = await getHotelById(id)
    return hotel
}