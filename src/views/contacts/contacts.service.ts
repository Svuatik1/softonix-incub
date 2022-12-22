class ContactsService {
  // rest/v1/contacts
  getContacts() {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  addContact(payload: IContact) {
    return useHttp.post('rest/v1/contacts', payload)
  }

  deleteContact(payload: IContact) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${payload.id}`)
  }

  changeContact(payload: IContact) {
    return useHttp.patch(`rest/v1/contacts?id=eq.${payload.id}`, payload)
  }
}

export const contactsService = new ContactsService()
