ecoType.service('appService', function(){
	var that = this;

	that.getPackets = function() {
		return [
			{
			id: '0001',
			icon: 'images/logo/refresh.png',
			imageUrl: 'images/logo/refresh.svg',
			content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
			price: '39.99',
			title: 'Refresh',
			time: 'Between 1:00 - 2.5 hours depending on the size of the vehicle and the level of dirtiness.',
			details: {
				exterior: {
					value: 'Exterior - Waterless wash ',
					include: true
				},
				ExteriorWaxed: {
					value: 'Exterior waxed - For protection and shine',
					include: true
				},
				windows: {
					value: 'Windows - Cleaned inside & outside',
					include: true,
				},
				wheels: {
					value: 'Wheels - Cleaned',
					include: true
				},
				tyres: {
					value: 'Tyres - Cleaned & dressed',
					include: true
				},
				interior: {
					value: 'Interior - Vacuumed & wiped',
					include: true
				},
				boot: {
					value: 'Boot - Vacuumed',
					include: false
				},
				mats: {
					value: 'Mats - Deep cleaned',
					include: false
				},
				upholstery: {
					value: 'Upholstery - Deep cleaned',
					include: false
				},
				leather: {
					value: 'Leather - Cleaned & conditioned',
					include: false
				},
				engineCover: {
					value: 'Engine cover and surrounding area - Cleaned',
					include: false
				},
				spareWheelStorage: {
					value: 'Spare wheel storage - Cleaned',
					include: false
				},
				exteriorPlastic: {
					value: 'Exterior plastic - Restored',
					include: false
				}
			}
		},

		{
			id: '0002',
			icon: 'images/logo/like.png',
			imageUrl: 'images/logo/pure.svg',
			content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
			title: 'Pure',
			time: 'Between 1:00 - 2.5 hours depending on the size of the vehicle and the level of dirtiness.',
			price: '69.99',
			details: {
				exterior: {
					value: 'Exterior - Waterless wash',
					include: true
				},
				ExteriorWaxed: {
					value: 'Exterior waxed - For protection and shine',
					include: true
				},
				windows: {
					value: 'Windows - Cleaned inside & outside',
					include: true,
				},
				wheels: {
					value: 'Wheels - Cleaned',
					include: true
				},
				tyres: {
					value: 'Tyres - Cleaned & dressed',
					include: true
				},
				interior: {
					value: 'Interior - Vacuumed & wiped',
					include: true
				},
				boot: {
					value: 'Boot - Vacuumed',
					include: true
				},
				mats: {
					value: 'Mats - Deep cleaned',
					include: true
				},
				upholstery: {
					value: 'Upholstery - Deep cleaned',
					include: true
				},
				leather: {
					value: 'Leather - Cleaned & conditioned',
					include: true
				},
				engineCover: {
					value: 'Engine cover and surrounding area - Cleaned',
					include: false
				},
				spareWheelStorage: {
					value: 'Spare wheel storage - Cleaned',
					include: false
				},
				exteriorPlastic: {
					value: 'Exterior plastic - Restored',
					include: false
				}
			}
		},

		{	
			id: '0003',
			icon: 'images/logo/perfect.png',
			imageUrl: 'images/logo/pureplus.svg',
			content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
			price: '99.99',
			title: 'Pure +',
			time: 'Between 1:00 - 2.5 hours depending on the size of the vehicle and the level of dirtiness.',
			details: {
				exterior: {
					value: 'Exterior - Waterless wash',
					include: true
				},
				ExteriorWaxed: {
					value: 'Exterior waxed - For protection and shine',
					include: true
				},
				windows: {
					value: 'Windows - Cleaned inside & outside',
					include: true,
				},
				wheels: {
					value: 'Wheels - Cleaned',
					include: true
				},
				tyres: {
					value: 'Tyres - Cleaned & dressed',
					include: true
				},
				interior: {
					value: 'Interior - Vacuumed & wiped',
					include: true
				},
				boot: {
					value: 'Boot - Vacuumed',
					include: true
				},
				mats: {
					value: 'Mats - Deep cleaned',
					include: true
				},
				upholstery: {
					value: 'Upholstery - Deep cleaned',
					include: true
				},
				leather: {
					value: 'Leather - Cleaned & conditioned',
					include: true
				},
				engineCover: {
					value: 'Engine cover and surrounding area - Cleaned',
					include: true
				},
				spareWheelStorage: {
					value: 'Spare wheel storage - Cleaned',
					include: true
				},
				exteriorPlastic: {
					value: 'Exterior plastic - Restored',
					include: true
				}
			}
		}
		]
	}
})