// ======== Auth ========
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  cpf?: string;
  role?: UserRole;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  token: string;
}

export interface UpdateProfileRequest {
  name?: string;
  phone?: string;
  cpf?: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export enum UserRole {
  Customer = 0,
  Organizer = 1,
  Admin = 2
}

// ======== Events ========
export interface EventListResponse {
  id: number;
  title: string;
  description: string;
  venue: string;
  city: string;
  state: string;
  dateTime: string;
  imageUrl?: string;
  category?: string;
  status: EventStatus;
  minPrice: number;
  totalTicketsAvailable: number;
}

export interface EventResponse {
  id: number;
  title: string;
  description: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  dateTime: string;
  imageUrl?: string;
  category?: string;
  status: EventStatus;
  organizerId: number;
  organizerName: string;
  createdAt: string;
  ticketTypes: TicketTypeResponse[];
}

export interface TicketTypeResponse {
  id: number;
  eventId: number;
  name: string;
  description?: string;
  price: number;
  quantityTotal: number;
  quantitySold: number;
  quantityAvailable: number;
  isActive: boolean;
  saleStartDate?: string;
  saleEndDate?: string;
}

export interface CreateEventRequest {
  title: string;
  description: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  dateTime: string;
  imageUrl?: string;
  category?: string;
  ticketTypes: CreateTicketTypeRequest[];
}

export interface CreateTicketTypeRequest {
  name: string;
  description?: string;
  price: number;
  quantityTotal: number;
  saleStartDate?: string;
  saleEndDate?: string;
}

export enum EventStatus {
  Draft = 0,
  Active = 1,
  Cancelled = 2,
  Completed = 3
}

// ======== Orders ========
export interface CreateOrderRequest {
  items: OrderItemRequest[];
  paymentMethod: PaymentMethod;
}

export interface OrderItemRequest {
  ticketTypeId: number;
  quantity: number;
}

export interface OrderResponse {
  id: number;
  userId: number;
  userName: string;
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  stripeClientSecret?: string;
  createdAt: string;
  paidAt?: string;
  items: OrderItemResponse[];
}

export interface OrderItemResponse {
  id: number;
  ticketTypeId: number;
  ticketTypeName: string;
  eventTitle: string;
  eventId: number;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export enum OrderStatus {
  Pending = 0,
  Paid = 1,
  Cancelled = 2,
  Refunded = 3
}

export enum PaymentMethod {
  Card = 0,
  Pix = 1
}

// ======== Tickets ========
export interface TicketResponse {
  id: number;
  serialNumber: string;
  qrCodeBase64: string;
  eventTitle: string;
  eventId: number;
  eventVenue: string;
  eventCity: string;
  eventDateTime: string;
  ticketTypeName: string;
  unitPrice: number;
  isUsed: boolean;
  usedAt?: string;
  createdAt: string;
}

export interface ValidateTicketRequest {
  qrCodeHash: string;
}

export interface ValidateTicketResponse {
  isValid: boolean;
  message: string;
  ticket?: TicketValidationDetail;
}

export interface TicketValidationDetail {
  ticketId: number;
  serialNumber: string;
  eventTitle: string;
  ticketTypeName: string;
  holderName: string;
  wasAlreadyUsed: boolean;
  usedAt?: string;
}

// ======== Pagination ========
export interface PagedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ======== API Error ========
export interface ApiError {
  error: string;
  statusCode: number;
  details?: string[];
}
