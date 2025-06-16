import { Schema } from 'mongoose';
import { PropertyBrand, PropertyColor, PropertyFuel, PropertyStatus, PropertyTransmission } from '../libs/enums/property.enum';

const PropertySchema = new Schema(
	{
		propertyTransmission: {
			type: String,
			enum: PropertyTransmission,
			required: true,
		},

		propertyStatus: {
			type: String,
			enum: PropertyStatus,
			default: PropertyStatus.ACTIVE,
		},

		propertyBrand: {
			type: String,
			enum: PropertyBrand,
			required: true,
		},

		propertyColor: {
			type: String,
			enum: PropertyColor,
			required: true,
		},

		propertyFuel: {
			type: String,
			enum: PropertyFuel,
			required: true,
		},

		propertyAddress: {
			type: String,
			required: true,
		},

		propertyTitle: {
			type: String,
			required: true,
		},

		propertyPrice: {
			type: Number,
			required: true,
		},

		propertyYear: {
			type: Number,
			required: true,
		},

		propertyOdometer: {
			type: Number,
			required: true,
		},

		propertyViews: {
			type: Number,
			default: 0,
		},

		propertyLikes: {
			type: Number,
			default: 0,
		},

		propertyComments: {
			type: Number,
			default: 0,
		},

		propertyRank: {
			type: Number,
			default: 0,
		},

		propertyImages: {
			type: [String],
			required: true,
		},

		propertyDesc: {
			type: String,
		},

		propertySell: {
			type: Boolean,
			default: false,
		},

		propertyRent: {
			type: Boolean,
			default: false,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		soldAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'properties' },
);

PropertySchema.index({ propertyType: 1, propertyTransmission: 1, propertyTitle: 1, propertyPrice: 1 }, { unique: true });

export default PropertySchema;
