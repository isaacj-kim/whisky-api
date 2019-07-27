package wcci.whiskyapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class WhiskyBrandController {
	
		@Autowired
		private WhiskyBrandRepository whiskyBrandRepo;
		private WhiskyType whiskyType;
		
		
		@GetMapping("/brands")
		public Iterable<WhiskyBrand> sendWhiskyBrands(){
			return whiskyBrandRepo.findAll();
		}
		
		@GetMapping ("/brands/{id}")
		public WhiskyBrand sendWhiskyBrand(@PathVariable Long id) {
			return whiskyBrandRepo.findById(id).get();
		}

		@PostMapping ("/add-brands")
		public WhiskyBrand addWhiskyBrand(String brandName) {
			WhiskyBrand whiskyBrandToAdd = new WhiskyBrand(brandName, whiskyType);
			if (whiskyBrandRepo.findByBrandName(whiskyBrandToAdd.getBrandName())==null) {
				whiskyBrandRepo.save(whiskyBrandToAdd);
			}
			return whiskyBrandRepo.findByBrandName(whiskyBrandToAdd.getBrandName());
			
		}
}
		

