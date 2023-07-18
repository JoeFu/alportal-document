# CRM

A core function of the platform is to act as a customer relationship management tool. In essence, this involves collecting and storing information about people and companies that the firm interacts with.

This is primarily captured by the `Contact` and `Organisation` entities.

### Contact

A `Contact` represents an individual person that the firm has interacted with in some way. 

The primary usage of this is to track past, present and potential individual clients that the firm has provided legal services to. 

However, Contacts are also used to store information for other people, such as Opposing Counsels in legal cases, other professional contacts that clients may have such as their accountant or financial advisor, etc.

### Organisation

An `Organisation` represents a company or organisation that the firm has interacted with in some way.

Typically this will be the organisation that a Contact either owns, is employed by, or is associated with in some other way.
