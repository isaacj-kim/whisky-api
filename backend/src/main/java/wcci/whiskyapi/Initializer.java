package wcci.whiskyapi;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Initializer implements CommandLineRunner {

	
	@Autowired
	WhiskyTypeRepository whiskyTypeRepo;
	
	@Autowired
	WhiskyBrandRepository whiskyBrandRepo;
	
	@Autowired
	WhiskyLabelRepository whiskyLabelRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
		WhiskyType irish = new WhiskyType("Irish");
		WhiskyType bourbon = new WhiskyType("Bourbon");
		WhiskyType scotch = new WhiskyType("Scotch");
		whiskyTypeRepo.save(irish);
		whiskyTypeRepo.save(bourbon);
		whiskyTypeRepo.save(scotch);
		

		WhiskyBrand jameson = new WhiskyBrand("Jameson", irish);
		WhiskyBrand bulleit = new WhiskyBrand("Bulleit", bourbon);
		WhiskyBrand dewars = new WhiskyBrand("Dewars", scotch);
		whiskyBrandRepo.save(jameson);
		whiskyBrandRepo.save(bulleit);
		whiskyBrandRepo.save(dewars);
		
		whiskyLabelRepo.save(new WhiskyLabel("Black", jameson));
		whiskyLabelRepo.save(new WhiskyLabel("Blue", jameson));
		whiskyLabelRepo.save(new WhiskyLabel("Gold", jameson));
		
		whiskyLabelRepo.save(new WhiskyLabel("Black", bulleit));
		whiskyLabelRepo.save(new WhiskyLabel("Blue", bulleit));
		whiskyLabelRepo.save(new WhiskyLabel("Gold", bulleit));
		
		whiskyLabelRepo.save(new WhiskyLabel("10-year", dewars));
		whiskyLabelRepo.save(new WhiskyLabel("20-year", dewars));
		whiskyLabelRepo.save(new WhiskyLabel("50-year", dewars));
	
	
	}
}