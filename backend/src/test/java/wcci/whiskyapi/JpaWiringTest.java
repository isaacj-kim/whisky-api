package wcci.whiskyapi;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest

public class JpaWiringTest {

	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	TypeRepository whiskyTypeRepo;
	
	@Autowired
	BrandRepository whiskyBrandRepo;
	
	@Autowired
	LabelRepository whiskyLabelRepo;

	private Type whiskyType;
	private Brand whiskyBrand;
	
//	private WhiskyBrand testWhiskyBrand = new WhiskyBrand("Proper 12", testWhiskyType);
//	private WhiskyLabel testWhiskyLabel = new WhiskyLabel("Proper Black");
//
//	@Before
//	public void saveTestEntitiesToRepos() {
//		whiskyBrandRepo.save(testWhiskyBrand);
//		whiskyLabelRepo.save(testWhiskyLabel);
//		
//		entityManager.flush();
//		entityManager.clear();
//	}
	
	@Test
	public void WhiskyBrandShouldHaveOneWhiskyTypeAndCollectionOfWhiskyLabels() {
		Type testWhiskyType = new Type("Irish Whisky", "");
		testWhiskyType = whiskyTypeRepo.save(testWhiskyType);
		Brand testWhiskyBrand = new Brand("Proper 12", "", whiskyType);
		testWhiskyBrand.addType(testWhiskyType);
		Label testWhiskyLabel = new Label("Proper Black", whiskyBrand);
		testWhiskyLabel = whiskyLabelRepo.save(testWhiskyLabel);

		testWhiskyType.addBrand(testWhiskyBrand);
		testWhiskyType = whiskyTypeRepo.save(testWhiskyType);
	
		testWhiskyBrand.addLabel(testWhiskyLabel);
		testWhiskyBrand = whiskyBrandRepo.save(testWhiskyBrand);

		entityManager.flush();
		entityManager.clear();
		
		Brand retrievedWhiskyBrand = whiskyBrandRepo.findById(testWhiskyBrand.getId()).get();
		assertThat(retrievedWhiskyBrand.getType(), is(testWhiskyType));
	}
	
	
	
	
		
}