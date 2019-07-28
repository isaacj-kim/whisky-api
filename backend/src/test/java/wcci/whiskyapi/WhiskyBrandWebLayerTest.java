package wcci.whiskyapi;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Collections;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import wcci.whiskyapi.controllers.WhiskyBrandController;
import wcci.whiskyapi.entities.WhiskyBrand;
import wcci.whiskyapi.entities.WhiskyType;
import wcci.whiskyapi.repositories.WhiskyBrandRepository;


@WebMvcTest(WhiskyBrandController.class)
@RunWith(SpringRunner.class)
public class WhiskyBrandWebLayerTest {
	@Autowired
	MockMvc mockMvc;

	@MockBean
	WhiskyBrandRepository whiskyBrandRepo;
	
	private WhiskyType whiskyType;
	private WhiskyBrand testWhiskyBrand;
	private ObjectMapper mapper = new ObjectMapper();

	@Before
	public void setup() {
		testWhiskyBrand = new WhiskyBrand("", whiskyType);
	}

	@Test
	public void fetchCollectionOfBrandss() throws Exception {
		when(whiskyBrandRepo.findAll()).thenReturn(Collections.singletonList(testWhiskyBrand));
		mockMvc.perform(get("/api/brands")).andDo(print()).andExpect(status().isOk())
				.andExpect(content().contentType("application/json;charset=UTF-8"))
				.andExpect(content().json(mapper.writeValueAsString(Collections.singletonList(testWhiskyBrand)), true));
	}

	@Test
	public void fetchSingleBrand() throws Exception {
		when(whiskyBrandRepo.findById(1L)).thenReturn(Optional.of(testWhiskyBrand));
		mockMvc.perform(get("/api/brands/1")).andDo(print()).andExpect(status().isOk())
				.andExpect(content().contentType("application/json;charset=UTF-8"))
				.andExpect(content().json(mapper.writeValueAsString(testWhiskyBrand), true));
	}

	@Test
	public void addBrand() throws Exception {
		WhiskyBrand whiskyBrandToAdd = new WhiskyBrand("", whiskyType);
		mockMvc.perform(post("/api/add-brands").contentType(MediaType.APPLICATION_JSON).content(toJson(whiskyBrandToAdd)))
				.andExpect(status().isOk());
	}

	private String toJson(WhiskyBrand whiskyBrandToAdd) {
		return testWhiskyBrand.getBrandName();
	}
}

