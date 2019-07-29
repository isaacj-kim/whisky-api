package wcci.whiskyapi;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class Initializer implements CommandLineRunner {

	
	@Autowired
	TypeRepository typeRepo;
	
	@Autowired
	BrandRepository brandRepo;
	
	@Autowired
	LabelRepository labelRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
		Type irish = new Type("Irish", "Irish whiskey is made in Ireland with a blend of malted and unmalted barley in the pot still phase");
		Type bourbon = new Type("Bourbon", "Bourbon is whiskey made in the U.S.A, generally Kentucky, and is distilled from corn");
		Type scotch = new Type("Scotch", "Scotch is whisky made in Scotland, and is made mostly from malted barley");
		typeRepo.save(irish);
		typeRepo.save(bourbon);
		typeRepo.save(scotch);
		

		Brand jameson = new Brand("Jameson", "Jameson is a blended Irish whiskey produced by the Irish Distillers subsidiary of Pernod Ricard", irish);
		Brand bulleit = new Brand("Bulleit", "Bulleit Bourbon is a brand of Kentucky straight bourbon whiskey produced at the Kirin Brewing Company Four Roses Distillery in Lawrenceburg, Kentucky", bourbon);
		Brand dewars = new Brand("Dewars", "Dewar's is a brand of blended Scotch whisky owned by Bacardi, which claims the brand's \"White Label\" to be the top-selling blended Scotch in the US", scotch);
		brandRepo.save(jameson);
		brandRepo.save(bulleit);
		brandRepo.save(dewars);
		
		
//		Label black = new Label("Black", jameson);
//		labelRepo.save(black);
//		Label blue = new Label("Blue", jameson);
//		labelRepo.save(blue);
//		Label gold = new Label("Gold", jameson);
//		labelRepo.save(gold);
//		
		
		labelRepo.save(new Label("Black", jameson));
		labelRepo.save(new Label("Blue", jameson));
		labelRepo.save(new Label("Gold", jameson));
		
		labelRepo.save(new Label("Black", bulleit));
		labelRepo.save(new Label("Blue", bulleit));
		labelRepo.save(new Label("Gold", bulleit));
		
		labelRepo.save(new Label("10-year", dewars));
		labelRepo.save(new Label("20-year", dewars));
		labelRepo.save(new Label("50-year", dewars));
	
	
	}
}