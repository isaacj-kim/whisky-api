package wcci.whiskyapi;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Initializer implements CommandLineRunner {

	
	@Autowired
	TypeRepository whiskyTypeRepo;
	
	@Autowired
	BrandRepository whiskyBrandRepo;
	
	@Autowired
	LabelRepository whiskyLabelRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
		Type irish = new Type("Irish", "Irish whiskey is made in Ireland with a blend of malted and unmalted barley in the pot still phase");
		Type bourbon = new Type("Bourbon", "Bourbon is whiskey made in the U.S.A, generally Kentucky, and is distilled from corn");
		Type scotch = new Type("Scotch", "Scotch is whisky made in Scotland, and is made mostly from malted barley");
		whiskyTypeRepo.save(irish);
		whiskyTypeRepo.save(bourbon);
		whiskyTypeRepo.save(scotch);
		

		Brand jameson = new Brand("Jameson", "Jameson is a blended Irish whiskey produced by the Irish Distillers subsidiary of Pernod Ricard", irish);
		Brand bulleit = new Brand("Bulleit", "Bulleit Bourbon is a brand of Kentucky straight bourbon whiskey produced at the Kirin Brewing Company Four Roses Distillery in Lawrenceburg, Kentucky", bourbon);
		Brand dewars = new Brand("Dewars", "Dewar's is a brand of blended Scotch whisky owned by Bacardi, which claims the brand's \"White Label\" to be the top-selling blended Scotch in the US", scotch);
		whiskyBrandRepo.save(jameson);
		whiskyBrandRepo.save(bulleit);
		whiskyBrandRepo.save(dewars);
		
		whiskyLabelRepo.save(new Label("Black", jameson));
		whiskyLabelRepo.save(new Label("Blue", jameson));
		whiskyLabelRepo.save(new Label("Gold", jameson));
		
		whiskyLabelRepo.save(new Label("Black", bulleit));
		whiskyLabelRepo.save(new Label("Blue", bulleit));
		whiskyLabelRepo.save(new Label("Gold", bulleit));
		
		whiskyLabelRepo.save(new Label("10-year", dewars));
		whiskyLabelRepo.save(new Label("20-year", dewars));
		whiskyLabelRepo.save(new Label("50-year", dewars));
	
	
	}
}