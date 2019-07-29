package wcci.whiskyapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class BrandController {
	
		@Autowired
		private BrandRepository brandRepo;
		private Type type;
		
		
		@GetMapping("/brands")
		public Iterable<Brand> sendWhiskyBrands(){
			return brandRepo.findAll();
		}
		
		@GetMapping ("/brands/{id}")
		public Brand sendWhiskyBrand(@PathVariable Long id) {
			return brandRepo.findById(id).get();
		}

		@PostMapping ("/add-brands")
		public Brand addWhiskyBrand(String brandName, String brandDescription) {
			Brand whiskyBrandToAdd = new Brand(brandName, brandDescription, type);
			if (brandRepo.findByBrandName(whiskyBrandToAdd.getBrandName())==null) {
				brandRepo.save(whiskyBrandToAdd);
			}
			return brandRepo.findByBrandName(whiskyBrandToAdd.getBrandName());
			
		}
}
		

